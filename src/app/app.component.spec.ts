import { TestBed, async } from '@angular/core/testing';
import { ConfigurationService } from '../../projects/configuration/src/lib/configuration.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: ConfigurationService,
          useValue: {
            configuration: {
              test: 'test',
            },
          },
        },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
