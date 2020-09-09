export class Game {
    constructor(
        public id: number = -1,
        public title: string,
        public sortname: string,
        public isFullyOptimized: string,
        public steamUrl: string,
        public store: string = 'Steam',
        public publisher: string,
        public genres: string[],
        public status: string,
        public isFree: string = 'NO',
        ) { }
  }