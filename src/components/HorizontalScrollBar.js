import React from "react";
import { Box,Stack } from "@mui/material";

function HorizontalScrollBar({ data }) {
  console.log(data);
  return (
    <div>
        <Stack direction="row" spacing={4}>
        {data.map((item) => {
        return (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
          >
            {item}
          </Box>
        );
      })}
        </Stack>
      
    </div>
  );
}

export default HorizontalScrollBar;
