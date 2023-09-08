// import api from "@/services/api";

import { ReactNode, createContext } from "react";

// import { IUser } from "@/types/users/users";

// import { AxiosResponse } from "axios";
// import jwt, { JwtPayload } from "jsonwebtoken";

// import { destroyCookie, parseCookies, setCookie } from "nookies";
// import { ReactNode, createContext, useEffect, useState } from "react";

// import { toast } from "react-toastify";

interface IAuthProvider {
  children: ReactNode;
}

interface IAuthContext {
  //   user: IUser | null;
  //   signOut: () => Promise<void>;
  //   signOutResident: () => Promise<void>;
  //   currentBranch: ICurrentBranch | null;
  //   getCurrentBranch: () => Promise<void>;
  //   getProductPermissions: () => Promise<void>;
  //   userBranches: IBranch[] | null;
  //   getProfile: (userToken: string) => Promise<void>;
  //   decodedToken: JwtPayload | null;
  //   productDashboard: any;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  return (
    <AuthContext.Provider
      value={
        {
          //   user,
          //   getProductPermissions,
          //   signOut,
          //   userBranches,
          //   currentBranch,
          //   getCurrentBranch,
          //   getProfile,
          //   decodedToken,
          //   signOutResident,
          //   productDashboard,
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
