import { MembroModule } from './membro.module';

describe('MembroModule', () => {
  let membroModule: MembroModule;

  beforeEach(() => {
    membroModule = new MembroModule();
  });

  it('should create an instance', () => {
    expect(membroModule).toBeTruthy();
  });
});
