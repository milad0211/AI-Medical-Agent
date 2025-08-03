"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { IconArrowRight } from "@tabler/icons-react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export type doctorAgent = {
  id: number;
  specialist: string;
  description: string;
  image: string;
  agentPrompt: string;
  voiceId?: string;
  subscriptionRequired: boolean;
};

type props = {
  doctorAgent: doctorAgent;
};
const DoctorAgentCard = ({ doctorAgent }: props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { has } = useAuth();
  // @ts-ignore
  const paidUser = has && has({ plan: "pro" });

  const onStartConsultation = async () => {
    setLoading(true);
    // save all info to DB
    const result = await axios.post("/api/session-chat", {
      notes: "New Conversation",
      selectedDoctor: doctorAgent,
    });

    if (result.data?.sessionId) {
      // Route new Conversation Screen
      router.push(`/dashboard/medical-agent/${result.data.sessionId}`);
    }
    setLoading(false);
  };
  return (
    <div className="relative">
      {doctorAgent.subscriptionRequired && (
        <Badge className="absolute m-2 right-0">Premium</Badge>
      )}
      <Image
        src={`/${doctorAgent.image}`}
        alt={doctorAgent.specialist}
        width={200}
        height={300}
        className="w-full object-cover h-[250px] rounded-xl"
      />
      <h2 className="font-bold mt-1">{doctorAgent.specialist}</h2>
      <p className="text-gray-500 text-sm  line-clamp-2">
        {doctorAgent.description}
      </p>
      <Button
        onClick={onStartConsultation}
        className="w-full my-2"
        disabled={!paidUser && doctorAgent.subscriptionRequired}
      >
        Start Consultaion{" "}
        {loading ? <Loader2Icon className="animat-spin" /> : <IconArrowRight />}
      </Button>
    </div>
  );
};

export default DoctorAgentCard;
