import "./dividedLayout.css";
import React from "react";

export default function DividedLayout(props) {
  return (
    <div className="dividedLayout">
      {React.Children.map(props.children, (child) => {
        return (
          <>
            <hr
              className="pageDivider"
              style={{
                backgroundColor: props.dividerColor,
                height: props.dividerHeight,
              }}
            />
            {child}
          </>
        );
      })}
    </div>
  );
}
