"use client"; // <- this makes the whole page a client component

import { columns } from "../../components/table/columns";
import { DataTable } from "@/components/table/data-table";
import StatCard from "@/components/ui/StatCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface AppointmentCounts {
  scheduledCount: number;
  pendingCount: number;
  cancelledCount: number;
  documents: any[];
}

const Admin = () => {
  const [appointments, setAppointments] = useState<AppointmentCounts>({
    scheduledCount: 0,
    pendingCount: 0,
    cancelledCount: 0,
    documents: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(
          "/api/actions/appointmentactions/get-appointmentList"
        );
        const data = await res.json();
        setAppointments(data);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl text-center py-20">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href={"/"}>
          <h1 className="text-36-bold mb-2 text-center">
            <span className="text-purple-500">Appoint</span>Bit
          </h1>
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable data={appointments.documents} columns={columns} />
      </main>
    </div>
  );
};

export default Admin;
