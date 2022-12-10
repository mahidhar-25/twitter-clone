import React from "react";
import "../../css/SidebarOption.css";
/* components pass chesthey first letter capital lo undali props lo norml variable em kadu */
function SidebarOptions({active , text, Icon }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      {/* component so first letter should be capital */}
        <Icon />
        <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
