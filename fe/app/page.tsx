"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Strong,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

type QuestionProps = {
  onClick: () => void;
};

const Question0 = ({ onClick }: QuestionProps) => (
  <>
    <Heading as="h1" className="custom-text">
      <Strong>
        Ak sa k tebe dostala táto stránka pravdepodobne budeš corporate princess
        👸
      </Strong>
    </Heading>
    <Text as="p" className="custom-text mt-4">
      Mám pre tebe pripavených pár jednoduchých otázok!
    </Text>
    <Text as="p" className="custom-text mt-4">
      Si pripravená?
    </Text>
    <Button onClick={onClick} style={{ marginTop: "30px" }}>
      Áno, už sa neviem dočkať
    </Button>
  </>
);

const Question1 = ({ onClick }: QuestionProps) => (
  <>
    <Heading as="h1" className="custom-text">
      <Strong>
        Máš budúci týždeň nejaký free spot v kalendári popri takto naročnej
        práci?
      </Strong>
    </Heading>
    <Box style={{ marginTop: "30px", display: "flex", gap: 10 }}>
      <Button onClick={onClick}>Niečo by sa tam našlo...</Button>
      <Button onClick={onClick}>Nemam, ale rada si ho spravím!</Button>
    </Box>
  </>
);

const Question2 = ({ onClick }: QuestionProps) => {
  const [addMargin, setAddMargin] = useState(false);
  return (
    <>
      <Heading as="h1" className="custom-text">
        <Strong>
          Si ochotná tento vzácny voľný čas stráviť v spoločnosti corporate IT
          nerda? 🤓👨‍💻
        </Strong>
      </Heading>
      <Box style={{ marginTop: "30px", display: "flex", gap: 10 }}>
        <Button onClick={onClick}>Rozhodne áno</Button>
        <Button
          onMouseEnter={() => setAddMargin((prev) => !prev)}
          style={{ marginTop: addMargin ? 60 : 0 }}
        >
          Si normálny? To vôbec...
        </Button>
      </Box>
    </>
  );
};

const Question3 = ({ onClick }: QuestionProps) => {
  const [showModal, setShowModal] = useState(false);
  const [wrongCount, setWrongCount] = useState(0);

  const onWrongAnswear = () => {
    setShowModal(true);
    setWrongCount((prev) => prev + 1);
  };

  const isDisabled = wrongCount > 2;
  return (
    <>
      <Heading as="h1" className="custom-text">
        <Strong>
          Ako veľmi sa na stupnici od 1 po 10 na tento nezabudnuteľný zážitok
          tešíš? 🤔
        </Strong>
      </Heading>
      {wrongCount === 1 && (
        <Text color="ruby" as="p">
          <Strong>Ľutujeme, ale zadali ste nesprávnu odpoveď</Strong>
        </Text>
      )}
      {wrongCount === 2 && (
        <Text color="ruby" as="p">
          <Strong>Ani tato odpoveď nie je správna!</Strong>
        </Text>
      )}
      {wrongCount > 2 && (
        <Text color="ruby" as="p">
          <Strong>Ešte ťa to baví? 🙄🙄</Strong>
        </Text>
      )}
      <Box style={{ marginTop: "30px", display: "flex", gap: 10 }}>
        <Button disabled={isDisabled} onClick={onWrongAnswear}>
          1
        </Button>
        <Button disabled={isDisabled} onClick={onWrongAnswear}>
          2
        </Button>
        <Button disabled={isDisabled} onClick={onWrongAnswear}>
          3
        </Button>
        <Button disabled={isDisabled} onClick={onWrongAnswear}>
          4
        </Button>
        <Button disabled={isDisabled} onClick={onWrongAnswear}>
          5
        </Button>
        <Button disabled={isDisabled} onClick={onWrongAnswear}>
          6
        </Button>
        <Button disabled={isDisabled} onClick={onWrongAnswear}>
          7
        </Button>
        <Button disabled={isDisabled} onClick={onWrongAnswear}>
          8
        </Button>
        <Button disabled={isDisabled} onClick={onWrongAnswear}>
          9
        </Button>
        <Button onClick={onClick}>10</Button>
      </Box>
    </>
  );
};

const Question4 = () => {
  const [addMargin, setAddMargin] = useState(false);
  return (
    <>
      <Heading as="h1" className="custom-text">
        <Strong>Gratulujem! 🎉</Strong>
      </Heading>
      <Heading as="h1" className="custom-text">
        <Strong>
          Na všetky otázky si odpovedala správne. Postupuješ do dalšieho kola,
          vidíme sa 😉
        </Strong>
      </Heading>
    </>
  );
};

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <Container size="3">
      <Box
        className="p-4"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          alignItems: "center",
          margin: "auto",
          width: "fit-content",
          paddingTop: "20vh",
        }}
      >
        {questionNumber === 0 && (
          <Question0 onClick={() => setQuestionNumber(1)} />
        )}
        {questionNumber === 1 && (
          <Question1 onClick={() => setQuestionNumber(2)} />
        )}
        {questionNumber === 2 && (
          <Question2 onClick={() => setQuestionNumber(3)} />
        )}
        {questionNumber === 3 && (
          <Question3 onClick={() => setQuestionNumber(4)} />
        )}
        {questionNumber === 4 && <Question4 />}
      </Box>
    </Container>
  );
}
