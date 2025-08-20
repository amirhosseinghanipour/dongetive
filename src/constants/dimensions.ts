export const Dimens = {
  // spacing
  spacingXS: 2.0,
  spacingS: 4.0,
  spacingSS: 6.0,
  spacingM: 8.0,
  spacingL: 12.0,
  spacingXL: 16.0,
  spacingXXL: 20.0,
  spacingXXXL: 38.21,

  // border radius
  borderRadiusS: 8.0,
  borderRadiusM: 10.0,
  borderRadiusL: 14.0,
  borderRadiusXL: 16.0,
  borderRadiusXXL: 20.0,
  borderRadiusXXXL: 26.21,

  // icon sizes
  iconSizeXS: 6.0,
  iconSizeS: 16.0,
  iconSizeM: 22.0,
  iconSizeL: 28.0,
  iconSizeXL: 32.0,
  iconSizeXXL: 35.0,
  iconSizeXXXL: 44.0,

  // avatar sizes
  avatarRadius: 45.0,
  avatarBorderWidth: 8.0,

  // chart dimensions
  chartWidth: 267.37,
  chartHeight: 100.0,
  chartStrokeWidth: 20.0,
  chartGapSize: 15.0,
  chartBackgroundOffset: 6.0,

  // navigation bar
  navBarHeight: 80.0,
  fabOffset: 12.0,
  fabSize: 40.0,

  // profile card
  profileCardTopMargin: 50.0,
  profileCardTopPadding: 60.0,
  profileCardBottomPadding: 20.0,

  // info cards
  infoCardHeight: 46.0,
  infoCardHorizontalPadding: 17.0,

  // gauge chart
  gaugeChartBottomSpacing: 90.0,
  gaugeChartLegendBottomPosition: 35.0,
  gaugeChartLegendSpacing: 6.0,
  gaugeChartLegendDotSize: 17.47,
  gaugeChartLegendBorderWidth: 2.18,

  // navigation
  addItemButtonTopSpacing: 28.0,
} as const;

export type DimenKey = keyof typeof Dimens;
