using LearningPath.Gateway.Client.Dag.Api;
using Microsoft.AspNetCore.Mvc;

namespace LearningPath.Gateway.Handlers
{
	public interface IDefaultApiHandler
	{
		public Task<IActionResult> PingGet();
	}

	public class DefaultApiHandler : IDefaultApiHandler
	{
        private readonly IDefaultApi _defaultApi;

        public DefaultApiHandler(IDefaultApi defaultApi)
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
