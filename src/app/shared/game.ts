export class Game {
    constructor(
        public id: number,
        public title: string,
        public sortname: string,
        public isFullyOptimized: string,
        public steamUrl: string,
        public store: string,
        public publisher: string,
        public genres: string,
        public status: string,
        ) { }
  }