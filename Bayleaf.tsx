import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function BayLeafManifestation() {
    const [message, setMessage] = useState("");
    const [burning, setBurning] = useState(false);
    const [burned, setBurned] = useState(false);

    const handleBurn = () => {
        if (message.trim() === "") return;
        setBurning(true);
        setTimeout(() => {
            setBurning(false);
            setBurned(true);
            setMessage("");
        }, 3000); // Simulate burning time
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-3xl font-bold mb-6">Bay Leaf Manifestation</h1>
            <Card className="w-80 p-4 bg-gray-800 border-gray-700">
                <CardContent>
                    {!burned ? (
                        <>
                            <Input
                                type="text"
                                placeholder="Write your intention..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mb-4 text-black"
                                disabled={burning}
                            />
                            <Button onClick={handleBurn} disabled={burning} className="w-full">
                                {burning ? "Burning... 🔥" : "Burn It 🔥"}
                            </Button>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="text-center"
                        >
                            <p className="text-lg">Your intention has been released! 🌌</p>
                            <Button className="mt-4" onClick={() => setBurned(false)}>
                                Write Another
                            </Button>
                        </motion.div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
