using LearningPath.Gateway.Client.Dag.Api;
using LearningPath.Gateway.Client.Dag.Model;
using Microsoft.AspNetCore.Mvc;

namespace LearningPath.Gateway.Handlers
{
	public interface IDagApiHandler
	{
		public Task<IActionResult> DagGet(int dagid);
	}

	public class DagApiHandler : IDagApiHandler
	{
		private readonly IDagApi _dagApi;

		public DagApiHandler(IDagApi dagApi)
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
