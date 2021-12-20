

$(function () {

  class GaugeChart {
    constructor(element, params) {
      this._element = element;
      this._initialValue = params.initialValue;
      this._higherValue = params.higherValue;
      this._title = params.title;
      this._subtitle = params.subtitle;
    }

    _buildConfig() {
      let element = this._element;

      return {
        value: this._initialValue,
        valueIndicator: {
          color: '#000' },

        geometry: {
          startAngle: 180,
          endAngle: 360 },

        scale: {
          startValue: 0,
          endValue: this._higherValue,
          customTicks: this._Tickets,
          tick: {
            length: 8 },

          label: {
            font: {
              color: '#87959f',
              size: 9,
              family: '"Open Sans", sans-serif' } } },



        title: {
          verticalAlignment: 'bottom',
          text: this._title,
          font: {
            family: '"Open Sans", sans-serif',
            color: '#000',
            size: 18 },

          subtitle: {
            text: this._subtitle,
            font: {
              family: '"Open Sans", sans-serif',
              color: '#000',
              weight: 700,
              size: 20 } } },



        onInitialized: function () {
          let currentGauge = $(element);
          let circle = currentGauge.find('.dxg-spindle-hole').clone();
          let border = currentGauge.find('.dxg-spindle-border').clone();

          currentGauge.find('.dxg-title text').first().attr('y', 48);
          currentGauge.find('.dxg-title text').last().attr('y', 28);
          currentGauge.find('.dxg-value-indicator').append(border, circle);
        } };


    }

    init() {
      $(this._element).dxCircularGauge(this._buildConfig());
    }}


  $(document).ready(function () {
    $('.gauge').each(function (index, item) {
      let params = {
        initialValue: 780,
        higherValue: 1560,
        title: `Temperature ${index + 1}`,
        subtitle: '701 ºC' };
      var Tickets=[0, 250, 500, 780, 1050, 1300, 1560];
      let gauge = new GaugeChart(item, params);
      gauge.init();
    });
  });
});