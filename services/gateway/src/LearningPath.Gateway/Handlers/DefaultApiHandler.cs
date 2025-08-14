using Microsoft.AspNetCore.Mvc;

namespace LearningPath.Gateway.Handlers
{
	public interface IDefaultApiHandler
	{
		public IActionResult PingGet();
	}

	public class DefaultApiHandler : IDefaultApiHandler
	{
		public IActionResult PingGet()
		{
			// This method is intentionally left empty.
			// It serves as a placeholder for the default API handler.
			return null;
		}
	}
}
