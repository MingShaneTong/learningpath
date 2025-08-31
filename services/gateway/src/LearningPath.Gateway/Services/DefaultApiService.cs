using LearningPath.Gateway.Client.Dag.Api;
using Microsoft.AspNetCore.Mvc;

namespace LearningPath.Gateway.Services
{
	public interface IDefaultApiService
	{
		public Task<IActionResult> PingGet();
	}

	public class DefaultApiService : IDefaultApiService
	{
        private readonly IDefaultApi _defaultApi;

        public DefaultApiService(IDefaultApi defaultApi)
        {
			_defaultApi = defaultApi;
        }

        public async Task<IActionResult> PingGet()
        {
            var response = await _defaultApi.TestGetAsync();
            if (response.IsOk)
                return new OkResult();
            return new StatusCodeResult((int)response.StatusCode);
        }
	}
}
