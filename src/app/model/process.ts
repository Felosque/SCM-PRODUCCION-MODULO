export class Process {
  constructor(public code: number,
              public processName: string,
              public processOrder: string,
              public processTime: string,
              public stockProduced: number,
              public product: any
  ) {
  }
}
