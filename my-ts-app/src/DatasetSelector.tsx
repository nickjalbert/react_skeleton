import { Datasets } from './Types';


interface Props {
  dataset: string,
  onChange: (newValue: Datasets) => void,
}

function DatasetSelector(props: Props) {
  let radio1Checked = false;
  let radio2Checked = false;
  if (props.dataset === 'Cars') {
    radio1Checked = true;
  }
  if (props.dataset === 'Trucks') {
    radio2Checked = true;
  }
  return (
    <div className="DatasetSelector">
      <div>
          <div className="radio">
              <label>
                  <input
                      type="radio"
                      name="value"
                      onChange={() => props.onChange('Cars')}
                      value="Cars"
                      checked={radio1Checked}
                  />
                  Cars
              </label>
          </div>
          <div className="radio">
              <label>
                  <input
                      type="radio"
                      name="value"
                      onChange={() => props.onChange('Trucks')}
                      value="Trucks"
                      checked={radio2Checked}
                  />
                  Trucks
              </label>
          </div>
      </div>
      Dataset selected: {props.dataset}
    </div>
  );
}

export default DatasetSelector;
