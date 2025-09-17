import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar, Clock } from "lucide-react";
import WeeklyTimeTable from '../components/layout/WeeklyTimeTable';

const Timetable = () => {
  return (
    <main className="container mx-auto px-6 py-8">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Timetable</h1>
          <p className="text-gray-600">
            View and manage your complete teaching schedule
          </p>
        </div>

        {/* Timetable Content */}
        <Card className="bg-white border border-gray-200 shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900">
              <Calendar className="h-5 w-5 mr-2" />
              Weekly Schedule
            </CardTitle>
            <CardDescription className="text-gray-600">
              Your complete weekly teaching timetable
            </CardDescription>
          </CardHeader>
          <div>
            <WeeklyTimeTable />
          </div>
          
        </Card>
      </div>
    </main>
  );
};

export default Timetable