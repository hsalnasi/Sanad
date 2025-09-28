import os
import azure.cognitiveservices.speech as speechsdk


SPEECH_KEY = os.getenv("AZURE_SPEECH_KEY", "YOUR_KEY")
SPEECH_REGION = os.getenv("AZURE_SPEECH_REGION", "YOUR_REGION")

speech_config = speechsdk.SpeechConfig(subscription=SPEECH_KEY, region=SPEECH_REGION)
# Choose a Saudi voice from Azure portal (example placeholder)
speech_config.speech_synthesis_voice_name = "ar-SA-HindNeural"  # pick an available ar-SA neural voice
speech_config.speech_recognition_language = "ar-SA"

audio_config = speechsdk.audio.AudioConfig(use_default_microphone=True)
recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)
synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config, audio_config=None)

def simple_rule_response(text):
    # very small rule-based responder — expand later
    text = text.lower()
    if any(w in text for w in ["مرحبا", "السلام"]):
        return "مرحبا! كيف أقدر أساعدك اليوم؟"
    if "دواء" in text or "مواعيد" in text or "تذكير" in text:
        return "تذكير: حان موعد الدواء الآن. هل تريدني أضبط التذكير؟"
    return "آسف، لم أفهم جيدًا. ممكن تعيد لو سمحت؟"

print("Say something (Arabic, Saudi dialect preferred)...")
result = recognizer.recognize_once()
if result.reason == speechsdk.ResultReason.RecognizedSpeech:
    print("User said:", result.text)
    reply = simple_rule_response(result.text)
    print("Bot reply:", reply)
    # speak the reply
    synthesizer.speak_text_async(reply).get()
else:
    print("No speech recognized or an error occurred:", result.reason)
