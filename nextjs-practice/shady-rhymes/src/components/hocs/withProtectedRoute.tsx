import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { getItem, IS_LOGIN } from '@helpers/localStorage';
import { ROUTES } from '@constants/router';

type Props = {
  children: React.ReactNode;
};

const WithProtectedRoute = ({ children }: Props) => {
  const router = useRouter();

  const isLogin = getItem(IS_LOGIN);

  useEffect(() => {
    if (!isLogin) {
      router.push(ROUTES.LOGIN);
    }
  });
  return isLogin ?? children;
};

export default WithProtectedRoute;
