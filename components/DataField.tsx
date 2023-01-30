import React from "react";

const DataField: React.FC<{
  field: string;
  value: string | number;
  measurementUnit?: string;
}> = ({ field, value, measurementUnit }) => {
  return (
    <div className="flex gap-2">
      <p className="font-medium w-max">{field}:</p>
      <p className="text-right">
        {value} {measurementUnit}
      </p>
    </div>
  );
};

export default DataField;
