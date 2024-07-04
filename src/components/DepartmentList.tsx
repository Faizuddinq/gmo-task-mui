import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

// Hardcode data
const departmentData = [
  {
    department: "Customer Service",
    subDepartments: ["Support", "Customer Success"]
  },
  {
    department: "Design",
    subDepartments: ["Graphic Design", "Product Design", "Web Design"]
  },
  // {
  //   department: "Engineer",
  //   subDepartments: ["Frontend", "Backend", "Database"]
  // }
];

export default function DepartmentList() {
  const [control, setControl] = useState<{ [key: string]: boolean[] }>({
    "Customer Service": [false, false, false],
    "Design": [false, false, false, false],
    // "Engineer": [false, false, false, false]
  });

  // Handler for selecting AND not selecting department
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>, department: string) => {
    const isChecked = event.target.checked;
    setControl((prev) => ({
      ...prev,
      [department]: prev[department].map(() => isChecked)
    }));
  };

  // Handler for selecting AND not selecting  sub departments
  const handleSubCheckbox = (event: React.ChangeEvent<HTMLInputElement>, department: string, index: number) => {
    const isChecked = event.target.checked;
    setControl((prev) => {
      const newControl = { ...prev };
      newControl[department][index] = isChecked;
      newControl[department][0] = newControl[department].slice(1).every((item) => item);
      return newControl;
    });
  };

  // component for sub-departments
  const SubDepartments = (department: string, subDepartments: string[]) => (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", ml: 5 }}>
      {subDepartments.map((subDept, index) => (
        <FormControlLabel
          key={subDept}
          label={subDept}
          control={
            <Checkbox
              checked={control[department][index + 1]}
              onChange={(e) => handleSubCheckbox(e, department, index + 1)}
            />
          }
        />
      ))}
    </Box>
  );

  return (
    <Box sx={{ padding: 4, background: "#91DDCF", borderRadius:10, }}>
      <Typography variant="h3" color="#343a40" sx={{ mb: 5, }}>
        Choose Department
      </Typography>
      {departmentData.map((item) => (
        <Accordion key={item.department} sx={{ background: "#80AF81" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.department}-content`}
            id={`${item.department}-header`}
          >
            <FormControlLabel
              label={item.department}
              control={
                <Checkbox
                  checked={control[item.department][0]}
                  indeterminate={
                    control[item.department].slice(1).some((item) => item) &&
                    !control[item.department].slice(1).every((item) => item)
                  }
                  onChange={(e) => handleCheckbox(e, item.department)}
                />
              }
            />
          </AccordionSummary>
          <AccordionDetails>
            {SubDepartments(item.department, item.subDepartments)}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
