import React from "react";

const DataField: React.FC<{
  field: string;
  value: string | number;
  measurementUnit?: string;
}> = ({ field, value, measurementUnit }) => {
  return (
    <div className="flex gap-2">
      <p className="text-sm font-medium w-max md:text-base">{field}:</p>
      <p className="text-sm text-right md:text-base">
        {value} {measurementUnit}
      </p>
    </div>
  );
};

export default DataField;
