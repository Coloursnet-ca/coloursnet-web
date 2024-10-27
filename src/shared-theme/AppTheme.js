import * as React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { typography, shadows, shape } from "./themePrimitives";

function AppTheme({ children, disableCustomTheme, themeComponents }) {
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          typography,
          shadows,
          shape,
          palette: {
            background: {
              default: "#000000",
              divider: "#ccd1d666",
            },
            text: {
              primary: "#ffffff",
            },
          },
        });
  }, [disableCustomTheme]);

  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node,
  disableCustomTheme: PropTypes.bool,
  themeComponents: PropTypes.object,
};

export default AppTheme;
