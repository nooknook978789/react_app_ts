import React from "react";
import Inputtext from "../../components/form/Inputtext";
import Button from "../../components/form/Button";
import GridColumn from "../../components/grid/GridColumn";
const RegisterForm = () => {
  return (
    <div className="grid grid-cols-13">
      <div className="">

        <GridColumn type={"twoColFull"}>
          <label htmlFor="name">Name</label>
          <Inputtext
            value={"name"}
            onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
          ></Inputtext>
        </GridColumn>
      </div>
        <div>
        <Button label={"OK"}></Button>
        </div>
    </div>
  );
};

export default RegisterForm;
