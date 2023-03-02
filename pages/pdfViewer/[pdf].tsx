import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@/src/Link";
import SwipeView from "@/components/SwipeView";
import styles from "@/styles/Home.module.scss";
import { Fade, IconButton, Pagination, Paper, Stack } from "@mui/material";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import { useEffect, useRef, useState } from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import TopMenu from "@/components/TopMenu";
import { Document, Page } from "react-pdf";
import { useRouter } from "next/router";
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

export default function PdfViewer() {
  const { query, isReady } = useRouter();
  const { pdf } = query;

  const [pdfPathState, setPdfPath] = useState<null | string | string[]>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    console.log(pdf);
    if (pdf) setPdfPath(`/pdfs/${pdf}`);
  }, [isReady, pdf]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log(numPages);
    setNumPages(numPages);
  }
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };
  function zoomIn() {
    setScale((prev) => prev + 0.1);
  }
  function zoomOut() {
    setScale((prev) => (prev >= 0 ? prev - 0.1 : prev));
  }
  return (
    <>
      <Head>
        <title>PdfViewer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box display={"flex"} justifyContent={"center"} paddingY={2}>
          <Paper elevation={6}>
            <Box borderRadius={4}>
              <Document
                className={styles.roundedPdf}
                file={pdfPathState}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page
                  scale={1.3}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  pageNumber={pageNumber}
                />
              </Document>
            </Box>
          </Paper>
        </Box>

        <Box
          marginTop={pdfPathState ? "-1.6rem" : "0rem"}
          marginBottom={"2rem"}
          bottom={"0"}
          display="flex"
          justifyContent={"center"}
          width="100%"
          zIndex={1}
          position={"relative"}
        >
          <Paper elevation={7}>
            <Box
              p={2}
              display="flex"
              flexDirection={"column"}
              gap={1}
              alignItems="center"
            >
              {/* <Box>
                <IconButton>
                  <ZoomInIcon></ZoomInIcon>
                </IconButton>
                <IconButton>
                  <ZoomOutIcon></ZoomOutIcon>
                </IconButton>
              </Box> */}

              <Pagination
                variant={"outlined"}
                color="primary"
                count={numPages}
                page={pageNumber}
                onChange={handleChange}
              />
            </Box>
          </Paper>
        </Box>
      </main>
    </>
  );
}
