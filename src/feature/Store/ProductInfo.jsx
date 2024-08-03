import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "../../ui/Rating";

function ProductInfo({ origin, brand, material, rating }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Product information
        </AccordionSummary>
        <AccordionDetails>
          <Grid container rowGap={2}>
            <Grid item xs={6}>
              <Typography
                varient="h5"
                sx={{ fontWeight: 600, fontSize: "0.9rem" }}
              >
                Brand <br />- <i>{brand}</i>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                varient="h5"
                sx={{ fontWeight: 600, fontSize: "0.9rem" }}
              >
                Material <br />- <i>{material}</i>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                varient="h5"
                sx={{ fontWeight: 600, fontSize: "0.9rem" }}
              >
                Origin <br />- <i>{origin}</i>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                varient="h5"
                sx={{ fontWeight: 600, fontSize: "0.9rem" }}
              >
                Rating <br />
              </Typography>
              <Rating rating={rating} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ProductInfo;
