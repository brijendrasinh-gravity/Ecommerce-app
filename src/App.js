import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import UserRegister from "./components/pages/user/userRegister";
import UserLogin from "./components/pages/user/userLogin";
import UserDashboard from "./components/pages/user/userDashboard";
import UserChangePassword from "./components/pages/user/userChangePassword";
import UserForgotPassword from "./components/pages/user/userForgotPassword";
import UserResetPassword from "./components/pages/user/userResetPassword";
import VendorRegister from "./components/pages/vendor/vendorRegister";
import VendorLogin from "./components/pages/vendor/vendorLogin";
import VendorDashboard from "./components/pages/vendor/vendorDashboard";
import VendorForgotPassword from "./components/pages/vendor/vendorForgotPassword";
import VendorChangePassword from "./components/pages/vendor/vendorChangePassword";
import VendorResetPassword from "./components/pages/vendor/vendorResetPassword";
import PendingVendors from "./components/pages/admin/pendingVendors";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/protectRoutes";
import VendorProducts from "./components/pages/vendor/vendorProducts";
import AdminLogin from "./components/pages/admin/adminLogin";
import AdminRegister from "./components/pages/admin/adminRegister";
import AdminForgotPassword from "./components/pages/admin/adminForgotPassword";
import AdminResetPassword from "./components/pages/admin/adminResetPassword";
import AdminChangePassword from "./components/pages/admin/adminChangePassword";
import AdminDashboard from "./components/pages/admin/adminDashboard";
import VerifyOtp from "./components/pages/user/userOtp";
import AdminVendorProducts from "./components/pages/admin/adminGetAllVendorProducts";
// import Bigheader from "./components/header2";
// import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Header />
      
      {/* <Bigheader/> */}
      {/* <Sidebar/> */}

      <Routes >

        <Route path="/user/login" element={<UserLogin />}/>
        <Route path="/user/loginotp" element={<VerifyOtp/>}/>
        <Route path="/user/register" element={<UserRegister/>}/>
        <Route path="/user/forgot-password" element={<UserForgotPassword />}/>
        <Route path="/user/reset-password" element={<UserResetPassword />}/>
        <Route path="/user/change-password" element={ <ProtectedRoute allow={["user"]}> <UserChangePassword /></ProtectedRoute>}/>
        <Route path="/user/dashboard" element={<ProtectedRoute allow={["user"]}><UserDashboard /></ProtectedRoute>}/>
        


        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
        <Route path="/vendor/forgot-password" element={<VendorForgotPassword />} />
        <Route path="/vendor/reset-password" element={<VendorResetPassword />} />
        <Route path="/vendor/change-password" element={ <ProtectedRoute allow={["vendor"]}> <VendorChangePassword /> </ProtectedRoute>}/>
        <Route path="/vendor/dashboard" element={ <ProtectedRoute allow={["vendor"]}><VendorDashboard /> </ProtectedRoute>}/>
        <Route path="/vendor/products" element={ <ProtectedRoute allow={["vendor"]}> <VendorProducts /> </ProtectedRoute>}/>


        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />}/>
        <Route path="/admin/reset-password" element={<AdminResetPassword />} />
        <Route path="/admin/change-password" element={ <ProtectedRoute allow={["admin"]}> <AdminChangePassword /> </ProtectedRoute> }/>
        <Route path="/admin/dashboard" element={ <ProtectedRoute allow={["admin"]}> <AdminDashboard /> </ProtectedRoute>}/>
        <Route path="/admin/pending-vendors" element={ <ProtectedRoute allow={["admin"]}> <PendingVendors /> </ProtectedRoute> }/>
        <Route path="/admin/vendors-products" element={ <ProtectedRoute allow={["admin"]}> <AdminVendorProducts/>   </ProtectedRoute>}/>

      </Routes>

      {/* <UserRegister/>
    <UserLogin/>

    <UserDashboard/>
    <UserChangePassword/>
    <UserForgotPassword/>
    <UserResetPassword/>

    <VendorRegister/>
    <VendorLogin/>
    <VendorDashboard/>
    <VendorChangePassword/>
    <VendorForgotPassword/>
    <VendorResetPassword/>
    <PendingVendors/> */}

      <Footer />
    </>
  );
}

export default App;
