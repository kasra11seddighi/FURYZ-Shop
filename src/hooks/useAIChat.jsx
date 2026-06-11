import { useState } from "react";
import { sendAIMessage } from "../API/aiClient";

export const useAIChat = () => {

  const [loading,setLoading] = useState(false);

  const askAI = async (messages) => {
    setLoading(true);

    try{
      const answer = await sendAIMessage(messages);
      return answer;
    }
    catch(e){
      return "خطا در ارتباط با هوش مصنوعی";
    }
    finally{
      setLoading(false);
    }
  };

  return { askAI, loading };
};
