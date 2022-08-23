import { Props } from './Types';

function DatasetDisplayer(props:Props) {
  return (
    <div className="DatasetDisplayer">
      Displaying dataset: {props.dataset}
    </div>
  );
}

export default DatasetDisplayer;
