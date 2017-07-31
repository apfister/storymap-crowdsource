import React from 'react';
import esriRequest from 'esri/request';

export const LiveStudentCount = class LiveStudentCount extends React.Component {

  constructor(props) {
    super(props);

    window.updateLiveRatio = function () {

      const url = this.props.summaryUrl + '/query';

      const outStatistics = [
        { onStatisticField: 'EDUCATOR_NUM_STUDENTS', statisticType: 'sum', outStatisticFieldName: 'EDUCATOR_NUM_STUDENTS_SUM'},
        { onStatisticField: 'STUDENT_CLASS_NUMBER', statisticType: 'sum', outStatisticFieldName: 'STUDENT_CLASS_NUMBER_SUM'}
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

            const fromEducators = feature.attributes.EDUCATOR_NUM_STUDENTS_SUM || 0;

            const fromStudents = feature.attributes.STUDENT_CLASS_NUMBER_SUM || 0;

            this.liveStudentCount = fromEducators + fromStudents;
          }
        },(err) => {
          console.log(err);
      });
    }.bind(this);

    window.updateLiveRatio();
  }

  render() {
    return (
      <div className="row live-count">
        <div className="col-xs-12">
          <span className="live-count-value">{this.liveStudentCount}</span>
          <span className="live-count-label">students taught</span>
        </div>

      </div>
    );
  }
};

export default LiveStudentCount;
