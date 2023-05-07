function genericResponse(
  data,
  pageSize = 6,
  pageNum = 0,
  totalRecords = 0,
  totalPagesCount = 0,
  hasNextPage = false,
  errorMessage = null,
  errors = null
) {
  return {
    data,
    pageSize,
    pageNum,
    totalRecords,
    totalPagesCount,
    hasNextPage,
    errorMessage,
    errors,
  };
}

module.exports = genericResponse;
