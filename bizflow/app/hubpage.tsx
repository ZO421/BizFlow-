"use client";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function HubPage() {
  const supabase = createClient();
    const [email, setEmail] = useState("");

      useEffect(() => {
          supabase.auth.getSession().then(({ data }) => {
                setEmail(data.session?.user?.email ?? "Not logged in");
                    });
                      }, []);

                        return (
                            <div className="flex items-center justify-center min-h-screen bg-green-50">
                                  <div className="text-center">
                                          <h1 className="text-3xl font-bold mb-4">Welcome to BizFlow</h1>
                                                  <p className="text-lg">{email}</p>
                                                        </div>
                                                            </div>
                                                              );
                                                              }