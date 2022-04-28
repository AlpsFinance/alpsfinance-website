import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AppBar from "../component/AppBar";
import Footer from "../component/Footer";
import Community from "../component/Community";

const faqList = [
  {
    question: "What is Alps Finance?",
    answer: "",
  },
  {
    question: "What is DeFi?",
    answer: "",
  },
  {
    question: "What is Crytpo Wallet?",
    answer: "",
  },
  {
    question: "How to invest DeFi in Alps Finance",
    answer: "",
  },
  {
    question: "Is Alps Finance open-source?",
    answer: "Yes. You can check our GitHub",
  },
];

const FAQ: NextPage = () => {
  const { breakpoints } = useTheme();
  const isLargeScreen = useMediaQuery(breakpoints.up("md"));

  return (
    <>
      <Head>
        <title>FAQ | Alps Finance</title>
        <meta
          name="description"
          content="Here are the list of most frequently asked questions in Alps Finance."
        />
      </Head>
      <AppBar />
      <Grid container mt="88px" direction="column">
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              py: 5,
              color: "white",
              background: `linear-gradient(to right, #597DFD, #B091F9)`,
            }}
          >
            <Grid item>
              <Typography
                variant={isLargeScreen ? "h2" : "h4"}
                align="center"
                sx={{ fontFamily: "'Press Start 2P', cursive" }}
              >
                <b>FAQ</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center">
                Here are the list of most frequently asked questions.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ py: 10, px: isLargeScreen ? 10 : 3 }}>
          <Typography
            variant={isLargeScreen ? "h4" : "h5"}
            align="center"
            mb={3}
          >
            🚧 Page Under Constructions 🚧
          </Typography>
          {faqList.map((faq, index) => {
            const { answer, question } = faq;
            return (
              <Accordion elevation={3} key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Grid>
      </Grid>
      <Community />
      <Footer />
    </>
  );
};

export default FAQ;
