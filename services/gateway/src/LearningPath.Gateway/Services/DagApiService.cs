using LearningPath.Gateway.Client.Dag.Api;
using Microsoft.AspNetCore.Mvc;

namespace LearningPath.Gateway.Services
{
	public interface IDagApiService
	{
		public Task<IActionResult> DagGet(int dagid);
	}

	public class DagApiService : IDagApiService
	{
		private readonly IDagApi _dagApi;

		public DagApiService(IDagApi dagApi)
		{
			_dagApi = dagApi;
		}

		public async Task<IActionResult> DagGet(int dagid)
		{
			var response = await _dagApi.DagGetAsync(dagid);
			if (response.IsOk)
				return new OkObjectResult(response.Ok());
			return new StatusCodeResult((int)response.StatusCode);
		}
	}
}
