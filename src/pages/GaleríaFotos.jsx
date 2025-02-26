import React, { useState } from "react";
import { Box, Grid, Dialog, DialogContent, useMediaQuery, useTheme } from "@mui/material";

const images = [
  "https://media.istockphoto.com/id/1482828400/photo/5g-repeater-tower.jpg?s=1024x1024&w=is&k=20&c=fyiTPTon66J8pKpGO-3nHxrInR3BvcFpgp1BUltl2eA=",
  "https://media.istockphoto.com/id/1299904059/photo/an-engineer-is-working-on-height-using-a-safety-helmet-and-equipment-fixing-an-antenna.jpg?s=1024x1024&w=is&k=20&c=lx1b4pW2ikT4RTsJNRVFxXj4SjfM80SJJtIvcBaWK8o=",
  "https://media.istockphoto.com/id/1264152460/photo/engineers-working-on-5g-antenna.jpg?s=1024x1024&w=is&k=20&c=SGJeJReq8Ft_QscUmBbinPUEKrBJ-KVul_qZb4HMkZg=",
  "https://media.istockphoto.com/id/836184206/photo/working-at-height.jpg?s=1024x1024&w=is&k=20&c=uc2g44U8GL0JdqLwcs6sAUCj9Ort8yEbZWKbg4ubNWY=",
  "https://media.istockphoto.com/id/1780480159/photo/mobile-5g-installation-on-high-mast.jpg?s=1024x1024&w=is&k=20&c=WW25WH1uTdkrFEg4XV0Rjjq-llzdwlgqCjCVJXbRLm4=",
  "https://media.istockphoto.com/id/2168976379/photo/low-angle-view-of-man-working-on-communication-tower-against-sky.jpg?s=1024x1024&w=is&k=20&c=RCrPV0ziLnwu2VEWzWLTlMB-vnJ3iWZfQGePrJdYXlY=",
  "https://media.istockphoto.com/id/909432046/photo/worker-climbing-on-high-cellular-network-tower.jpg?s=1024x1024&w=is&k=20&c=BjNAgbLTw96Qkg7za7i1-Bp76UfmvHLnY9BxcJ862fs=",
  "https://media.istockphoto.com/id/185249353/photo/oil-rig-worker.jpg?s=1024x1024&w=is&k=20&c=39reNtfd1PK95AWxRxNLgf4GSU2JZ7FCQg97mKtrMUo=",
  "https://media.istockphoto.com/id/1213293177/photo/female-engineer-working-on-the-field-near-a-telecommunications-tower.jpg?s=1024x1024&w=is&k=20&c=BhwjJjl_7MuJ9na9M0SOS3ZG50_r8_kZiWu8RnAHFag=",
];

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id="fotos" sx={{ background: "#f4f4f4", py: 5, display: "flex", justifyContent: "center" }}>
      <Box sx={{ maxWidth: isMobile ? "90%" : "60%" }}>
        <Grid container spacing={2} justifyContent="center">
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "8px",
                }}
                onClick={() => setSelectedImage(image)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Modal a pantalla completa */}
        <Dialog open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)} maxWidth="md">
          <DialogContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                borderRadius: "8px",
              }}
            />
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ImageGrid;
