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
        private readonly IDefaultApi _dagApi;

        public DefaultApiHandler(IDefaultApi dagApi)
        {
            _dagApi = dagApi;
        }

        public async Task<IActionResult> PingGet()
        {
            var response = await _dagApi.TestGetAsync();
            if (response.IsOk)
                return new OkResult();
            return new StatusCodeResult((int)response.StatusCode);
        }
	}
}
