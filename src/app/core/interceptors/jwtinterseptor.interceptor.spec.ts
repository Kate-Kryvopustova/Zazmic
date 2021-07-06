import { TestBed } from '@angular/core/testing';

import { JWTInterseptorInterceptor } from './jwtinterseptor.interceptor';

describe('JWTInterseptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JWTInterseptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JWTInterseptorInterceptor = TestBed.inject(JWTInterseptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
