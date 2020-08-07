import React from 'react';
import './custom.spinner.css';

export default function CustomSpinner(props) {
  // const [style, setStyle] = useState({});
  // const [color, setColor] = useState("black");

  // const styleXSM = {
  // 	borderRadius: "50%",
  // 	width: "10px",
  // 	height: "10px",
  // 	borderWidth: "2px",
  // 	borderStyle: "solid",
  // };

  // const styleSM = {
  // 	borderRadius: "50%",
  // 	width: "15px",
  // 	height: "15px",
  // 	borderWidth: "5px",
  // 	borderStyle: "solid",
  // };

  // const styleMD = {
  // 	borderRadius: "50%",
  // 	width: "30px",
  // 	height: "30px",
  // 	borderWidth: "10px",
  // 	borderStyle: "solid",
  // };

  // const styleLG = {
  // 	borderRadius: "50%",
  // 	width: "50px",
  // 	height: "50px",
  // 	borderWidth: "10px",
  // 	borderStyle: "solid",
  // };

  // useEffect(() => {
  // 	if (props.size) {
  // 		switch (props.size) {
  // 			case "xsm":
  // 				setStyle(styleXSM);
  // 				break;
  // 			case "sm":
  // 				setStyle(styleSM);
  // 				break;
  // 			case "md":
  // 				setStyle(styleMD);
  // 				break;
  // 			case "lg":
  // 				setStyle(styleLG);
  // 				break;
  // 			default:
  // 				setStyle(styleSM);
  // 				break;
  // 		}
  // 	} else {
  // 		setStyle(styleMD);
  // 	}

  // 	if (props.color) {
  // 		console.log(props.color);
  // 		setColor(props.color);
  // 	} else {
  // 		setColor("black");
  // 	}
  // }, [props.style, props.color]);

  return (
    <div>
      <div className={props.className}></div>
    </div>
  );
}
