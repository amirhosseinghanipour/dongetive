import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import { Colors } from '../constants/colors';
import { Dimens } from '../constants/dimensions';
import { TextStyles } from '../constants/textStyles';

type Props = {
  defiPercentage: number;
  ethereumPercentage: number;
};

export const GaugeChart: React.FC<Props> = React.memo(({ defiPercentage, ethereumPercentage }) => {
  const totalPercentage = defiPercentage + ethereumPercentage;
  const defiAngle = (defiPercentage / totalPercentage) * 180;
  const ethAngle = (ethereumPercentage / totalPercentage) * 180;
  const gapAngle = 10; // gap between segments

  const radius = Dimens.chartWidth / 2 - Dimens.chartStrokeWidth;
  const centerX = Dimens.chartWidth / 2;
  const centerY = Dimens.chartHeight / 2;

  // Calculate arc paths
  const defiStartAngle = 180;
  const defiEndAngle = defiStartAngle + defiAngle;
  const ethStartAngle = defiEndAngle + gapAngle;
  const ethEndAngle = ethStartAngle + ethAngle;

  const defiPath = describeArc(centerX, centerY, radius, defiStartAngle, defiEndAngle);
  const ethPath = describeArc(centerX, centerY, radius, ethStartAngle, ethEndAngle);
  const bgPath = describeArc(centerX, centerY, radius - Dimens.chartBackgroundOffset, 180, 360);

  return (
    <View style={styles.container}>
      <Text style={TextStyles.headingSmall}>Defi to Ethereum Ratio</Text>
      <View style={styles.chartContainer}>
        <Svg width={Dimens.chartWidth} height={Dimens.chartHeight}>
          <Defs>
            <LinearGradient id="defiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor={Colors.defi} />
              <Stop offset="100%" stopColor={Colors.defi} />
            </LinearGradient>
            <LinearGradient id="ethGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor={Colors.ethereum} />
              <Stop offset="100%" stopColor={Colors.ethereum} />
            </LinearGradient>
          </Defs>
          
          {/* Background arc */}
          <Circle
            cx={centerX}
            cy={centerY}
            r={radius - Dimens.chartBackgroundOffset}
            stroke={Colors.chipBackground}
            strokeWidth={Dimens.chartStrokeWidth}
            fill="none"
            strokeDasharray={`${Math.PI * (radius - Dimens.chartBackgroundOffset) * 0.5} ${Math.PI * (radius - Dimens.chartBackgroundOffset) * 0.5}`}
            strokeDashoffset={Math.PI * (radius - Dimens.chartBackgroundOffset) * 0.25}
          />
          
          {/* DeFi arc */}
          <Circle
            cx={centerX}
            cy={centerY}
            r={radius}
            stroke="url(#defiGradient)"
            strokeWidth={Dimens.chartStrokeWidth}
            fill="none"
            strokeDasharray={`${(defiAngle / 360) * 2 * Math.PI * radius} ${2 * Math.PI * radius}`}
            strokeDashoffset={Math.PI * radius}
            strokeLinecap="round"
          />
          
          {/* Ethereum arc */}
          <Circle
            cx={centerX}
            cy={centerY}
            r={radius}
            stroke="url(#ethGradient)"
            strokeWidth={Dimens.chartStrokeWidth}
            fill="none"
            strokeDasharray={`${(ethAngle / 360) * 2 * Math.PI * radius} ${2 * Math.PI * radius}`}
            strokeDashoffset={Math.PI * radius + (defiAngle / 360) * 2 * Math.PI * radius + (gapAngle / 360) * 2 * Math.PI * radius}
            strokeLinecap="round"
          />
        </Svg>
        
        <View style={styles.legend}>
          <LegendItem percentage={ethereumPercentage} label="Ethereum" color={Colors.ethereum} />
          <View style={{ height: Dimens.gaugeChartLegendSpacing }} />
          <LegendItem percentage={defiPercentage} label="DeFi" color={Colors.defi} />
        </View>
      </View>
    </View>
  );
});

const LegendItem: React.FC<{ percentage: number; label: string; color: string }> = React.memo(({ percentage, label, color }) => {
  return (
    <View style={styles.legendRow}>
      <Text style={TextStyles.chartPercentage}>{Math.round(percentage)}%</Text>
      <View style={{ width: Dimens.spacingS }} />
      <View style={styles.legendChip}>
        <View style={[styles.legendDot, { backgroundColor: color }]} />
        <View style={{ width: Dimens.spacingS }} />
        <Text style={TextStyles.chartLabel}>{label}</Text>
      </View>
    </View>
  );
});

// Helper function to describe arc path
const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
};

const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkCardBackground,
    borderRadius: Dimens.borderRadiusXL,
    padding: Dimens.spacingXL,
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: Dimens.gaugeChartBottomSpacing,
  },
  legend: {
    position: 'absolute',
    bottom: Dimens.gaugeChartLegendBottomPosition,
    alignItems: 'flex-start',
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendChip: {
    backgroundColor: Colors.chipBackground,
    borderRadius: Dimens.borderRadiusXXXL,
    paddingLeft: Dimens.spacingL,
    paddingRight: Dimens.spacingXL,
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: Dimens.gaugeChartLegendDotSize,
    height: Dimens.gaugeChartLegendDotSize,
    borderRadius: Dimens.gaugeChartLegendDotSize / 2,
    borderWidth: Dimens.gaugeChartLegendBorderWidth,
    borderColor: Colors.darkCardBackground,
  },
});

export default GaugeChart; 