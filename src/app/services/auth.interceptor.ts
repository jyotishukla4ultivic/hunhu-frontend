import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
  const token = localStorage.getItem('auth_token');
  console.log('AuthInterceptor: token from localStorage:', token); // Debug log
  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('AuthInterceptor: Authorization header set:', request.headers.get('Authorization'));
  } else {
    console.log('AuthInterceptor: No token found in localStorage');
  }
  return next(request);
}; 