import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar, Clock } from "lucide-react";

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
          <CardContent>
            <div className="flex items-center justify-center h-64 text-gray-500">
              <div className="text-center space-y-2">
                <Clock className="h-12 w-12 mx-auto text-gray-300" />
                <p>Timetable content will be implemented here</p>
                <p className="text-sm">This will show your weekly schedule grid</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Timetable