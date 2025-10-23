import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { generateText } from "@/services/openai";

interface HelpMeWriteProps {
  prompt: string;
  onAccept: (text: string) => void;
}

export const HelpMeWrite = ({ prompt, onAccept }: HelpMeWriteProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setUserPrompt(prompt);
    setShowSuggestion(false);
    setSuggestion("");
    setIsOpen(true);
    setError(false);
  };

  const handleClose = () => {
    if (isLoading) return;
    setIsOpen(false);
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    setShowSuggestion(true);
    setError(false);
    try {
      const text = await generateText(userPrompt);
      setSuggestion(text);
    } catch (error) {
      setSuggestion("Error generating text. Please try again.");
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccept = () => {
    onAccept(suggestion);
    handleClose();
  };

  const renderDialogContent = () => {
    if (!showSuggestion) {
      return (
        <TextField
          multiline
          fullWidth
          label={t("labels.yourPrompt")}
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          margin="normal"
        />
      );
    }

    if (isLoading) {
      return <CircularProgress sx={{ margin: "0 auto", display: "block" }} />;
    }

    return (
      <TextField
        multiline
        fullWidth
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
      />
    );
  };

  const renderDialogActions = () => {
    if (!showSuggestion) {
      return (
        <>
          <Button onClick={handleClose} disabled={isLoading}>
            {t("buttons.cancel")}
          </Button>
          <Button
            onClick={handleGenerate}
            variant="contained"
            disabled={isLoading}
          >
            {t("buttons.generate")}
          </Button>
        </>
      );
    }

    return (
      <>
        <Button onClick={handleClose} disabled={isLoading}>
          {t("buttons.discard")}
        </Button>
        {error ? (
          <Button
            onClick={handleGenerate}
            disabled={isLoading}
            variant="contained"
          >
            {t("buttons.tryAgain")}
          </Button>
        ) : (
          <Button
            onClick={handleAccept}
            disabled={isLoading}
            variant="contained"
          >
            {t("buttons.accept")}
          </Button>
        )}
      </>
    );
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ mt: 1 }}>
        {t("buttons.helpMeWrite")}
      </Button>
      <Dialog fullWidth open={isOpen} onClose={handleClose}>
        <DialogTitle>
          {showSuggestion ? t("dialogs.aiSuggestion") : t("dialogs.editPrompt")}
        </DialogTitle>
        <DialogContent>{renderDialogContent()}</DialogContent>
        <DialogActions sx={{ p: 3 }}>{renderDialogActions()}</DialogActions>
      </Dialog>
    </div>
  );
};
