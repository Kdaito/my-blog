import { useMemo } from "react";

export type PaginationProps = {
  currentPage: number;
  totalPage: number;
  onClickNext: () => void;
  onClickPrevious: () => void;
};

const Pagination: React.VFC<PaginationProps> = ({
  currentPage,
  totalPage,
  onClickNext,
  onClickPrevious,
}) => {
  const isExistPrevious = useMemo(() => currentPage - 1 > 0, [currentPage]);
  const isExistNext = useMemo(
    () => currentPage < totalPage,
    [currentPage, totalPage]
  );

  return (
    <div className="flex items-center justify-center mt-[50px] h-[40px]">
      <button
        className="bg-[#fff] text-[14px] h-full rounded-l-lg transition-all duration-200 lg:hover:bg-pointSub-100 lg:hover:text-[#fff] px-[15px] disabled:opacity-50 disabled:pointer-events-none"
        disabled={!isExistPrevious}
        onClick={onClickPrevious}
      >
        前の記事
      </button>
      <div className="h-full text-center px-[5px]">
        <p className="bg-[#fff] h-full text-[13px] flex items-center justify-center w-full px-[25px]">
          {currentPage} / {totalPage} ページ
        </p>
      </div>
      <button
        className="bg-[#fff] text-[14px] h-full rounded-r-lg transition-all duration-200 lg:hover:bg-pointMain-100 lg:hover:text-[#fff] px-[15px] disabled:opacity-50 disabled:pointer-events-none"
        disabled={!isExistNext}
        onClick={onClickNext}
      >
        次の記事
      </button>
    </div>
  );
};

export default Pagination;
