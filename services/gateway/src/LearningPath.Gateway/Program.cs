using LearningPath.Gateway.Services;
using LearningPath.Gateway.Client.Dag.Client;
using LearningPath.Gateway.Client.Dag.Extensions;
using Microsoft.AspNetCore.OpenApi;

var builder = WebApplication.CreateBuilder(args);
var dagBaseUrl = builder.Configuration.GetValue<string>("DagClient:BaseUrl");

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddApi(config => {
    config.AddApiHttpClients(client => client.BaseAddress = new Uri(dagBaseUrl));
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IDefaultApiService, DefaultApiService>();
builder.Services.AddScoped<IDagApiService, DagApiService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// app.UseAuthorization();

app.MapControllers().WithOpenApi();

app.Run();
