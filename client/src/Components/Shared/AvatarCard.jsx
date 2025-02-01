import { AvatarGroup, Stack, Box, Avatar } from '@mui/material'
import React from 'react'
import { transformImage } from "../../Lib/features";

const AvatarCard = ({avatar =[], max = 4, style}) => {
  return (
    <Stack direction={"row"} spacing={0.5} style={style}>
      <Box width={"5rem"} height={"3rem"}>
        <AvatarGroup max={max} sx={{ position: "relative" }}>
          {avatar.map((i, index) => (
            <Avatar
              key={Math.random() * 100}
              src={transformImage(i)}
              alt={`Avatar ${index}`}
              sx={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                left: {
                  xs: `${0.5 + index}rem`,
                  sm: `${index}rem`,
                },
              }}
            />
          ))}
        </AvatarGroup>
      </Box>
    </Stack>
  );
}

export default AvatarCard