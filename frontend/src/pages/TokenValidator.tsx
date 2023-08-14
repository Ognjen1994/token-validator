import Button from "@/components/button/Button";
import Select from "@/components/select/Select";
import { generateToken } from "@/utils/tokenUtils";
import { validateToken } from "@/api/tokenApi";
import React, { useState, useEffect } from "react";
import "./TokenValidator.scss";
import Box from "@/components/box/Box";
import Text from "@/components/text/Text";
import List from "@/components/list/List";

const TokenValidator = () => {
  const [digits, setDigits] = useState<string[]>([]);
  const [generatedToken, setGeneratedToken] = useState("");
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [selectError, setSelectError] = useState(false);
  const [isGeneratingTokens, setIsGeneratingTokens] = useState(false);
  const [validTokens, setValidTokens] = useState<string[]>([]);
  const [tokenCount, setTokenCount] = useState(0);
  const [apiError, setApiError] = useState<boolean>(false);

  const selectValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const generateTokenBtnClicked = () => {
    if (!checkIfValueIsSelected()) return;
    setApiError(false);
    const token = generateToken(digits);
    setGeneratedToken(token);
  };

  const validateTokenBtnClicked = async () => {
    try {
      const isValid = await validateToken(generatedToken);
      setIsTokenValid(isValid);
    } catch (err) {
      setApiError(true);
    }
  };

  const startTokenGenerationLoop = () => {
    if (!checkIfValueIsSelected()) return;

    setTokenCount(0);
    setValidTokens([]);
    setApiError(false);
    setIsGeneratingTokens(true);
  };

  const stopTokenGenerationLoop = () => {
    setIsGeneratingTokens(false);
  };

  const validateTokenAsync = async (token: string) => {
    const isValid = await validateToken(token);
    if (isValid) {
      setValidTokens(prevTokens => [...prevTokens, token]);
    }
  };

  const checkIfValueIsSelected = () => {
    if (digits.length === 0) {
      setSelectError(true);
      return false;
    }
    setSelectError(false);
    return true;
  };

  useEffect(() => {
    if (isGeneratingTokens) {
      const interval = setInterval(() => {
        const token = generateToken(digits);
        // This is real-time token validation. Whenever a new token is generated, it is validated immediately afterwards.
        // It could be written different so that tokens are validated after the user clicks the stop button,
        // in which case we would reduce the number of http calls to server.
        validateTokenAsync(token);
        setTokenCount(count => count + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isGeneratingTokens]);

  return (
    <div className="token-validator">
      <h1 className="token-validator__title">Token Validator</h1>
      <div className="token-validator__digits">
        <Select
          title="Digits"
          names={selectValues}
          value={digits}
          setValue={setDigits}
          id="select-digit"
          labelId="select-digit-label"
          hasError={selectError}
        />
      </div>
      <div className="token-validator__manual">
        <h3>Manual Token Validation</h3>
        <Box>
          <div className="token-validator__fields">
            <div>
              <Button onClick={generateTokenBtnClicked}>Generate Token</Button>
              <Button onClick={validateTokenBtnClicked}>Validate Token</Button>
            </div>
          </div>
          <div className="token-validator__text">
            <Text>Token value: {generatedToken}</Text>
            <Text>
              Is token valid:{" "}
              {isTokenValid !== null
                ? isTokenValid
                  ? "Valid"
                  : "Invalid"
                : ""}
            </Text>
          </div>
        </Box>
      </div>
      <div className="token-validator__auto">
        <h3>Auto Token Validation</h3>
        <Box>
          <div className="token-validator__fields">
            <Button onClick={startTokenGenerationLoop}>
              Start generating tokens
            </Button>
            <Button onClick={stopTokenGenerationLoop}>
              Stop generating tokens
            </Button>
          </div>
          <div className="token-validator__text">
            <Text>Total tokens: {tokenCount}</Text>
            <Text>Number of valid tokens: {validTokens.length}</Text>

            <List title="Valid tokens:" items={validTokens} />
          </div>
        </Box>
      </div>
      {apiError ? (
        <Text variant="error" className="token-validator__error">
          An error occurred while validating the token
        </Text>
      ) : null}
    </div>
  );
};

export default TokenValidator;
