import React from "react";
import  Button  from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../components/ui/Table";
import { Home, Users, Briefcase, DollarSign, Bell, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom"; // Update for React Router

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Link to="/" className="flex items-center space-x-2 text-primary">
            <Home className="h-6 w-6" />
            <span className="text-lg font-bold">HOME HARBOR</span>
          </Link>
        </div>
        <nav className="mt-8">
          <Link to="/dashboard" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100">
            <Briefcase className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link to="/users" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Users className="h-5 w-5 mr-3" />
            Users & Architects
          </Link>
          <Link to="/finances" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <DollarSign className="h-5 w-5 mr-3" />
            Finances
          </Link>
          <Link to="/notifications" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Bell className="h-5 w-5 mr-3" />
            Notifications
          </Link>
          <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <Button variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+10% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Architects</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">256</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Home className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">789</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$123,456</div>
                <p className="text-xs text-muted-foreground">+20% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities and Pending Approvals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Activity</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>New user registration: John Doe</TableCell>
                      <TableCell>2024-03-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>New project: Modern Eco Home</TableCell>
                      <TableCell>2024-03-14</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Project completed: Luxury Villa</TableCell>
                      <TableCell>2024-03-13</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Pending Approvals */}
            <Card>
              <CardHeader>
                <CardTitle>Pending Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>New architect application: Jane Smith</TableCell>
                      <TableCell>Pending</TableCell>
                      <TableCell>
                        <Button size="sm">Review</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Project proposal: Sustainable Office</TableCell>
                      <TableCell>Pending</TableCell>
                      <TableCell>
                        <Button size="sm">Review</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Commission Tracker */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Commission Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Architect</TableHead>
                    <TableHead>Total Value</TableHead>
                    <TableHead>Your Commission</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Modern Eco Home</TableCell>
                    <TableCell>Alice Johnson</TableCell>
                    <TableCell>$500,000</TableCell>
                    <TableCell>$25,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Luxury Villa</TableCell>
                    <TableCell>Bob Smith</TableCell>
                    <TableCell>$1,200,000</TableCell>
                    <TableCell>$60,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Urban Apartment Complex</TableCell>
                    <TableCell>Carol White</TableCell>
                    <TableCell>$3,000,000</TableCell>
                    <TableCell>$150,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
