import React from 'react';
import esriRequest from 'esri/request';

export const LiveRatio = class LiveRatio extends React.Component {

  constructor(props) {
    super(props);

    window.updateLiveRatio = function () {

      const url = 'https://services3.arcgis.com/7pxWboj3YvCWYdcm/arcgis/rest/services/theWorldsLargestLesson/FeatureServer/0/query';

      const outStatistics = [
        { onStatisticField: 'RATIO_MALE', statisticType: 'avg', outStatisticFieldName: 'male'},
        { onStatisticField: 'RATIO_FEMALE', statisticType: 'avg', outStatisticFieldName: 'female'}
      ];

      const params = {
        f: 'json',
        where: '1=1',
        outStatistics: JSON.stringify(outStatistics)
      };

      esriRequest({
        url: url,
        handleAs: 'json',
        content: params
        }).then((res) => {
          if (res && res.features.length > 0) {
            const feature = res.features[0];

            const male = feature.attributes.male.toFixed(0);

            const female = feature.attributes.female.toFixed(0);

            this.maleRatio = male;

            this.femaleRatio = female;
          }
        },(err) => {
          console.log(err);
      });
    }.bind(this);

    window.updateLiveRatio();
  }

  render() {
    return (
      <div className="row live-ratio">
        <div className="col-xs-12">
          <i className="fa fa-female" aria-hidden="true"></i>
          <span className="live-ratio-values">{this.femaleRatio} : {this.maleRatio}</span>
          <i className="fa fa-male" aria-hidden="true"></i>
          <span className="live-ratio-global-avg">global avg ratio</span>
        </div>

      </div>
    );
  }
};

export default LiveRatio;
