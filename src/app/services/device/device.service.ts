import { Injectable } from '@angular/core';
import { Observable, fromEvent, map, of, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private readonly breakpoint = 600;

  constructor() { }

  public isMobile(br: number = this.breakpoint): Observable<boolean> {
    if (typeof window !== 'undefined') {
      const checkSize = () => window.innerWidth <= br;

      // Create observable which will emit on window resize
      const size$ = fromEvent(window, 'resize').pipe(
        startWith(checkSize()), // Emit value immediately after subscription
        map(checkSize) // Map each event to a boolean representing if we're below the breakpoint
      );

      return size$;
    } else {
      return of(false);
    }
  }

  public scrolledBeyondThresh(thresh: number = 10): Observable<boolean> {
    if (typeof window !== 'undefined') {
      const checkScroll = () => window.scrollY > thresh;

      // Create observable which will emit on window scroll
      const size$ = fromEvent(window, 'scroll').pipe(
        startWith(checkScroll()), // Emit value immediately after subscription
        map(checkScroll) // Map each event to a boolean representing if we're below the threshold
      );

      return size$;
    } else {
      return of(false);
    }
  }

}
